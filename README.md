# progress-steps

<img width="612" alt="Screenshot 2021-03-05 at 00 33 53" src="https://user-images.githubusercontent.com/71224770/110049811-822d7080-7d4a-11eb-9598-60f9229e0700.png">

project notes

1. HTML<br />
    4 divs => make them circles<br />
    numbers inside circles<br />
    2 buttons: Prev & Next<br />
2. CSS<br />
    circles active<br />
    buttons active<br />
3. JavaScript<br />
    click eventListener<br />
    click button => next div circle + :after become active<br />

challenge by Brad Traversy & Florin Pop on Udemy "50 Project in 50 Days"<br />


# Takeaways from the instructor

1. HTML<br />
5 div instead of 4. 1 extra div is for the line.<br />
1 div for the line has id<br />
buttons have id<br />
disabled is attribute<br />

2. CSS<br />
1):root for colour.<br />
2)body: flexbox<br />
3)progress container: flexbox<br />
4)line: ‘top: 50%’ + ‘transform: translateY(-50%)’ make it in the middle of the container vertically.<br />
z-index to be behind circles.<br />
transition set without property<br />
width: 0%<br />
+::before same as line but change the colour and width to 100%, no transition<br />
5)btn<br />
font-family: inherit<br />
+:active transform: scale(0.98) effects on click. I used :hover<br />
+:focus outline: 0<br />

3. JavaScript<br />
const progress = document.getElementById(‘progress’)<br />
const prev = document.getElementById(‘prev’)<br />
const next = document.getElementById(’next’)<br />
Const circles = document.querySelectorAll(‘circle’)<br />

let currentActive = 1<br />

next.addEventListener(‘click’, () => {<br />
	currentActive++<br />
	if(currentActive > circles.length) {<br />
	currentActive = circles.length<br />
}<br />
	update();<br />
})

prev.addEventListener(‘click’, () => {<br />
	currentActive--<br />
	if(currentActive < 1) {<br />
	currentActive = 1<br />
	update();<br />
})

function update() {<br />
	circles.forEach((circle, idx) => {<br />
		if (idx < currentActive) {<br />
			circle.classList.add(‘active')<br />
} else { circle.classList.remove(‘active’)<br />
}

const actives = document.querySelectorAll(‘active’)<br />

progress.style.width = (active.length -1) / (circles.length -1) * 100 + ‘%’;<br />

if (cureentActive === 1) {<br />
prev.disabled = true;<br />
} else if (currentActive === circles.length) {<br />
next.disable = ture;<br />
} else  {<br />
prev.disabled = false;<br />
next.disable = false;<br />
}<br />
})<br />
}
