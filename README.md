 Steps-1 we need to define count down value for speacific date when page will launch
 step-2 we need current date and subtract it from launch date- this will give left time 
 step 3- we function that changes time for each 1sec Interval
 when time expires change the content of the page
Takeaway Lessons
1- getTime () gives milisecond of cureent date
2- convert milisecond into second - by deviding 1000
3- covert second in to day by deviding 24*60*60
4- Math.floor to round off
5- diff between flex and inlineflex
6- if gap is less the center item with Padding no need to use align-item:center or align-self:center
7- always create mobile first design then move to 786+
/* 768px + */
/* ================================================= */
@media screen and (min-width: 768px) {
    }
8- Better way to console using template literals
console.log("now date is" + varible name)=> NO
 console.log(`left time is ${timeLeft}`); => var name will go indie this ${}
 ![image](https://user-images.githubusercontent.com/74482130/210974317-79c0b6d7-9b1a-4eac-b5a1-5dbfd4bede5e.png)
