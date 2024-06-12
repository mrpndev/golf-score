// I know nothing about golf. I decided to recreate a golf question.

/* 
- There is an array of swings to make it into a hole
- Swings at 2nd and 5th hole are Par 3
- Swings at 4th and 8th hole are Par 5
- Swings at any other hole are Par 2

HINT: in golf, a par earns zero points if it's made in par amount of swings
Anything under par earns negative points
Anything over par earns positive points

Ex: if I'm at a par 5 hole and make it in two swings, I get -3 points
If I'm at a par 3 hole and make it in 6 swings, I get 3 points

*/

const swings = [1, 2, 5, 7, 3, 4, 2, 1, 8];

const points = (arr) => {
	let total = 0;
	arr.forEach((swing, index) => {
		if (index === 1 || index === 4) {
			total += swing - 3;
			return;
		}
		if (index === 3 || index === 7) {
			total += swing - 5;
			return;
		}
		total += swing - 2;
	});
    return total
};

console.log(points(swings))

/* 
I realized I could make this neater even neater by removing the total.
Instead, I can use reducer to keep the total for me using the accumulator
*/

const pointsReduceSoln = arr => {
    return arr.reduce((points, swing, index) => {
        if (index === 1 || index === 4) return points + (swing - 3)
        if (index === 3 || index === 7) return points + (swing - 5)
        return points + (swing - 2)
    }, 0)
}

console.log(pointsReduceSoln(swings))