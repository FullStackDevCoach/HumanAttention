localStorage.setItem('firstVisit', 1);
let firstView = localStorage.getItem("firstVisit");
// console.log(firstView);



  let loader = document.getElementById("preloader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });

  // Get Height

    let body = document.body;
    let viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    let viewWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
    let html = document.documentElement;
    let bodyH = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      body.getBoundingClientRect().height,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    console.log(bodyH);
    let fullPageHeight = bodyH;
    let page = Math.round(bodyH/viewHeight);
    // console.log("pageHeight " + bodyH);
    // console.log("Page " + page);
    // Get Height

        for (let i=1; i<=page; i++) {
            let div = document.createElement("div");
            div.style.width = "100%";
            div.style.height = viewHeight+"px";
            div.style.background = "transparent";
            div.style.color = "black";
            let id = "main-" + i;
            div.setAttribute('id', id);
            document.getElementById("main").appendChild(div);
            div.style.position = "absolute";
            div.style.zIndex = 3;
        }
      
        // page 1 
        let id1 = document.getElementById("main-1");
        id1.style.top = 0;
        id1.style.left = 0;
        id1.style.zIndex = 1;

        let elemnt1 = document.createElement("span");
        elemnt1.setAttribute('id', "page-1");
        elemnt1.style.opacity = 0;
        id1.appendChild(elemnt1);

        // page 1 

        // page 2 
        let id2 = document.getElementById("main-2");
        id2.style.top = viewHeight+"px";
        id2.style.left = 0;
        id2.style.zIndex = 1;

        let elemnt2 = document.createElement("span");
        elemnt2.setAttribute('id', "page-2");
        elemnt2.style.opacity = 0;
        id2.appendChild(elemnt2);

        // page 2 

        // page 3 
        let id3 = document.getElementById("main-3");
        id3.style.top = viewHeight*2+"px";
        id3.style.left = 0;
        id3.style.zIndex = 1;

        let elemnt3 = document.createElement("span");
        elemnt3.setAttribute('id', "page-3");
        elemnt3.style.opacity = 0;
        id3.appendChild(elemnt3);
        // page 3 

        // page 4 
        let id4 = document.getElementById("main-4");
        id4.style.top = viewHeight*3+"px";
        id4.style.left = 0;
        id4.style.zIndex = 1;

        let elemnt4 = document.createElement("span");
        elemnt4.setAttribute('id', "page-4");
        elemnt4.style.opacity = 0;
        id4.appendChild(elemnt4);
        // page 4 

         // page 5 
         let id5 = document.getElementById("main-5");
         id5.style.top = viewHeight*4+"px";
         id5.style.left = 0;
         id5.style.zIndex = 1;
 
         let elemnt5 = document.createElement("span");
         elemnt5.setAttribute('id', "page-5");
         elemnt5.style.opacity = 0;
         id5.appendChild(elemnt5);
         // page 5 

         // page 6 
         let id6 = document.getElementById("main-6");
         id6.style.top = viewHeight*5+"px";
         id6.style.left = 0;
         id6.style.zIndex = 1;
 
         let elemnt6 = document.createElement("span");
         elemnt6.setAttribute('id', "page-6");
         elemnt6.style.opacity = 0;
         id6.appendChild(elemnt6);
         // page 6 

          // page 7 
          let id7 = document.getElementById("main-7");
          id7.style.top = viewHeight*6+"px";
          id7.style.left = 0;
          id7.style.zIndex = 1;
  
          let elemnt7 = document.createElement("span");
          elemnt7.setAttribute('id', "page-7");
          elemnt7.style.opacity = 0;
          id7.appendChild(elemnt7);
          // page 7 

          // page 8 
          // let id8 = document.getElementById("main-8");
          // id8.style.top = viewHeight*7+"px";
          // id8.style.left = 0;
          // id8.style.zIndex = 1;
          
          // let elemnt8 = document.createElement("span");
          // elemnt8.setAttribute('id', "page-8");
          // elemnt8.style.opacity = 0;
          // id8.appendChild(elemnt8);
          // page 8 

        //  // page 9 
          //  let id9 = document.getElementById("main-9");
          //  id9.style.top = viewHeight*8+"px";
          //  id9.style.left = 0;
          //  id9.style.zIndex = 1;
   
          //  let elemnt9 = document.createElement("span");
          //  elemnt9.setAttribute('id', "page-9");
          //  id9.appendChild(elemnt9);
        //  // page 9 

        //   // page 10 
          //  let id10 = document.getElementById("main-10");
          //  id10.style.top = viewHeight*9+"px";
          //  id10.style.left = 0;
          //  id10.style.zIndex = 1;
   
          //  let elemnt10 = document.createElement("span");
          //  elemnt10.setAttribute('id', "page-10");
          //  id10.appendChild(elemnt10);
        //  //  page 10 


  function ViewPort() {
    let w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    let h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    let viewsize = w + "," + h;
    // alert("Your View Port Size is:" + viewsize);
    console.log("Your View Port Size is:" + viewsize);
  }
  ViewPort();

//   Time Count 
      TimeMe.initialize({
        currentPageName: "my-home-page", // current page
        idleTimeoutInSeconds: 5, // stop recording time due to inactivity
        //websocketOptions: { // optional
        //	websocketHost: "ws://your_host:your_port",
        //	appId: "insert-your-made-up-app-id"
        //}
      });

      // TimeMe.callAfterTimeElapsedInSeconds(4, function () {
      //   console.log(
      //     "The user has been using the page for 4 seconds! Let's prompt them with something."
      //   );
      // });

      // TimeMe.callAfterTimeElapsedInSeconds(9, function () {
      //   console.log(
      //     "The user has been using the page for 9 seconds! Let's prompt them with something."
      //   );
      // });

      window.onload = function () {
        TimeMe.trackTimeOnElement("main-1");
        TimeMe.trackTimeOnElement("main-2");
        TimeMe.trackTimeOnElement("main-3");
        TimeMe.trackTimeOnElement("main-4");
        TimeMe.trackTimeOnElement("main-5");
        TimeMe.trackTimeOnElement("main-6");
        TimeMe.trackTimeOnElement("main-7");
        // TimeMe.trackTimeOnElement("main-8");
        // TimeMe.trackTimeOnElement("main-9");
        // TimeMe.trackTimeOnElement("main-10");


        setInterval(function () {
          let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
          document.getElementById("timeInSeconds").textContent =
            timeSpentOnPage.toFixed(2);

          // if (
          //   TimeMe.isUserCurrentlyOnPage &&
          //   TimeMe.isUserCurrentlyIdle === false
          // ) {
          //   document.getElementById("activityStatus").textContent =
          //     "You are actively using this page.";
          // } else {
          //   document.getElementById("activityStatus").textContent =
          //     "You have left the page.";
          // }
          let timeSpentOnElement =
            TimeMe.getTimeOnElementInSeconds("main-1");
            document.getElementById("page-1").textContent =
            timeSpentOnElement.toFixed(2);
          
         
          let timeSpentOnElement2 =
            TimeMe.getTimeOnElementInSeconds("main-2");
          document.getElementById("page-2").textContent =
            timeSpentOnElement2.toFixed(2);

            let timeSpentOnElement3 =
            TimeMe.getTimeOnElementInSeconds("main-3");
          document.getElementById("page-3").textContent =
            timeSpentOnElement3.toFixed(2);

            let timeSpentOnElement4 =
            TimeMe.getTimeOnElementInSeconds("main-4");
          document.getElementById("page-4").textContent =
            timeSpentOnElement4.toFixed(2);

            let timeSpentOnElement5 =
            TimeMe.getTimeOnElementInSeconds("main-5");
          document.getElementById("page-5").textContent =
            timeSpentOnElement5.toFixed(2);

            // time1 = timeSpentOnElement;
            // time2= timeSpentOnElement2;
            // time3= timeSpentOnElement3;
            // time4= timeSpentOnElement4;
            // time5= timeSpentOnElement5;

        

            let timeSpentOnElement6 =
            TimeMe.getTimeOnElementInSeconds("main-6");
          document.getElementById("page-6").textContent =
            timeSpentOnElement6.toFixed(2);

            let timeSpentOnElement7 =
            TimeMe.getTimeOnElementInSeconds("main-7");
          document.getElementById("page-7").textContent =
            timeSpentOnElement7.toFixed(2);

          //   let timeSpentOnElement8 =
          //   TimeMe.getTimeOnElementInSeconds("main-8");
          // document.getElementById("page-8").textContent =
          //   timeSpentOnElement8.toFixed(2);

          //   let timeSpentOnElement9 =
          //   TimeMe.getTimeOnElementInSeconds("main-9");
          // document.getElementById("page-9").textContent =
          //   timeSpentOnElement9.toFixed(2);

          //   let timeSpentOnElement10 =
          //   TimeMe.getTimeOnElementInSeconds("main-10");
          // document.getElementById("page-10").textContent =
          //   timeSpentOnElement10.toFixed(2);
        }, 37);
      };
//   Time Count 

// Save Data 
let div1 = document.getElementById("main-1");
let div2 = document.getElementById("main-2");
let div3 = document.getElementById("main-3");
let div4 = document.getElementById("main-4");
let div5 = document.getElementById("main-5");
let div6 = document.getElementById("main-6");
let div7 = document.getElementById("main-7");
let mypage1,mypage2,mypage3,mypage4,mypage5,mypage6,mypage7;
// Page 1 
div1.addEventListener("mouseleave", function(){
  mypage1 = document.getElementById("timeInSeconds").innerHTML;
  if(firstView == 1){
    if(localStorage["page1"]){
      let rpage1 = localStorage.getItem('page1');
      localStorage.setItem("page1", parseInt(parseInt(mypage1)+parseInt(rpage1)));
        // console.log(rpage1);
        // console.log('asifff');
        // console.log(mypage);
    }else{
      localStorage.setItem("page1", mypage1);
    }
  }else{
    localStorage.setItem("page1", mypage1);
  }
});
// Page 1 

// Page 2 
div2.addEventListener("mouseleave", function(){
  mypage2 = document.getElementById("page-2").innerHTML;
  if(firstView == 1){
    if(localStorage["page2"]){
      let rpage2 = localStorage.getItem('page2');
      localStorage.setItem("page2", parseInt(parseInt(mypage2)+parseInt(rpage2)));
        // console.log(rpage1);
        // console.log('asifff');
        // console.log(mypage);
    }else{
      localStorage.setItem("page2", mypage2);
    }
  }else{
    localStorage.setItem("page2", mypage2);
  }
});
// Page 2

// Page 3 
div3.addEventListener("mouseleave", function(){
  mypage3 = document.getElementById("page-3").innerHTML;
  if(firstView == 1){
    if(localStorage["page3"]){
      let rpage3 = localStorage.getItem('page3');
      localStorage.setItem("page3", parseInt(parseInt(mypage3)+parseInt(rpage3)));
        // console.log(rpage1);
        // console.log('asifff');
        // console.log(mypage);
    }else{
      localStorage.setItem("page3", mypage3);
    }
  }else{
    localStorage.setItem("page3", mypage3);
  }
});
// Page 3

// Page 4 
div4.addEventListener("mouseleave", function(){
  mypage4 = document.getElementById("page-4").innerHTML;
  if(firstView == 1){
    if(localStorage["page4"]){
      let rpage4 = localStorage.getItem('page4');
      localStorage.setItem("page4", parseInt(parseInt(mypage4)+parseInt(rpage4)));
        // console.log(rpage1);
        // console.log('asifff');
        // console.log(mypage);
    }else{
      localStorage.setItem("page4", mypage4);
    }
  }else{
    localStorage.setItem("page4", mypage4);
  }
});
// Page 4

// Page 5 
div5.addEventListener("mouseleave", function(){
  mypage5 = document.getElementById("page-5").innerHTML;
  if(firstView == 1){
    if(localStorage["page5"]){
      let rpage5 = localStorage.getItem('page5');
      localStorage.setItem("page5", parseInt(parseInt(mypage5)+parseInt(rpage5)));
        // console.log(rpage1);
        // console.log('asifff');
        // console.log(mypage);
    }else{
      localStorage.setItem("page5", mypage5);
    }
  }else{
    localStorage.setItem("page5", mypage5);
  }
});
// Page 5

// Page 6 
div6.addEventListener("mouseleave", function(){
  mypage6 = document.getElementById("page-6").innerHTML;
  if(firstView == 1){
    if(localStorage["page6"]){
      let rpage6 = localStorage.getItem('page6');
      localStorage.setItem("page6", parseInt(parseInt(mypage6)+parseInt(rpage6)));
        // console.log(rpage1);
        // console.log('asifff');
        // console.log(mypage);
    }else{
      localStorage.setItem("page6", mypage6);
    }
  }else{
    localStorage.setItem("page6", mypage6);
  }
});
// Page 6

// Page 7 
div7.addEventListener("mouseleave", function(){
  mypage7 = document.getElementById("page-7").innerHTML;
  if(firstView == 1){
    if(localStorage["page7"]){
      let rpage7 = localStorage.getItem('page7');
      localStorage.setItem("page7", parseInt(parseInt(mypage7)+parseInt(rpage7)));
        // console.log(rpage1);
        // console.log('asifff');
        // console.log(mypage);
    }else{
      localStorage.setItem("page7", mypage7);
    }
  }else{
    localStorage.setItem("page7", mypage7);
  }
});
// Page 7

// Save Data 

//  Graph 

var myChart;
function showGraph() {
  var ctx = document.getElementById("myChart").getContext("2d");
  if (myChart) myChart.destroy();
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "Time Counting",
          data: [localStorage.getItem('page1'), localStorage.getItem('page2'), localStorage.getItem('page3'), localStorage.getItem('page4'), localStorage.getItem('page5'), localStorage.getItem('page6'), localStorage.getItem('page7')],
          backgroundColor: [
            "#3a7af2", "#3a7af2", "#3a7af2", "#3a7af2", "#3a7af2", "#3a7af2", "#3a7af2", "#3a7af2", "#3a7af2", "#3a7af2"
          ]
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Page",
        fontSize: 16,
        position: "bottom",
        fontColor: '#292929'
      },
      layout: {
        padding: {
          left: 40,
          top: 0,
          bottom: 0,
          right: 0,
        },
      },

    },
  });
  myChart.update();
}

$(function () {

  $('[data-toggle="modal"]').hover(function () {
    showGraph();
    var modalId = $(this).data('target');
    $(modalId).modal('show');
  });

});
// Graph