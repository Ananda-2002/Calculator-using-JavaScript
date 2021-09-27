// ======== Night Mode Function =====================
document.getElementById("mode").addEventListener("click", function () {
    mode = document.getElementById("mode").innerHTML;
    if (mode == "Night") {
      document.querySelector("body").style = "filter : invert(1)";
      document.getElementById("mode").innerHTML = "Day";
    } else if (mode == "Day") {
      document.querySelector("body").style = "filter : invert(0)";
      document.getElementById("mode").innerHTML = "Night";
    }
  });
//  ===================================================================
  document.getElementById("c").addEventListener("click", function () {
    document.getElementById("screen").innerHTML = "";
  });
  
  document.getElementById("<").addEventListener("click", function () {
    let back = document.getElementById("screen").innerHTML;
    back = back.substring(0, back.length - 1);
    document.getElementById("screen").innerHTML = back;
  });
  
  // //////////////////////////////////////////////////////////////
  
  document.getElementById("9").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "9";
  });
  
  document.getElementById("8").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "8";
  });
  
  document.getElementById("7").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "7";
  });
  
  document.getElementById("6").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "6";
  });
  
  document.getElementById("5").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "5";
  });
  
  document.getElementById("4").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "4";
  });
  
  document.getElementById("3").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "3";
  });
  
  document.getElementById("2").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "2";
  });
  
  document.getElementById("1").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "1";
  });
  
  document.getElementById("0").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "0";
  });
  

  document.getElementById("x").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "*";
  });
  
  document.getElementById("/").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "/";
  });
  
  document.getElementById("+").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "+";
  });
  
  document.getElementById("-").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "-";
  });

  document.getElementById(".").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += ".";
  });
  
  document.getElementById("n").addEventListener("click", function () {
    document.getElementById("screen").innerHTML += "-";
  });
  
  document.getElementById("=").addEventListener("click", function() {result ()})


//   ======= Result Function ==================================
function result(){
    
    let result = document.getElementById("screen").innerText;
    let result1 = eval(result);
    
    document.getElementById("screen").innerHTML = result1;
    historiesFinal = result + " = " + result1;
  
  
    let histories = localStorage.getItem("histories");
  
    if (histories == null) {
      historiesObj = [];
    } else {
      historiesObj = JSON.parse(histories);
    }
  
    historiesObj.push(historiesFinal);
  
    localStorage.setItem("histories", JSON.stringify(historiesObj));
  
  };



// =========== keyboard Functions ============================
document.onkeypress = function(e){
    let code = e.keyCode;
    console.log(code)
    if (code == "96" || code == "48") {
      document.getElementById("screen").innerHTML += "0";
    } else if (code == "97" || code == "49") {
      document.getElementById("screen").innerHTML += "1";
    } else if (code == "98" || code == "50") {
      document.getElementById("screen").innerHTML += "2";
    } else if (code == "99" || code == "51") {
      document.getElementById("screen").innerHTML += "3";
    } else if (code == "100" || code == "52") {
      document.getElementById("screen").innerHTML += "4";
    } else if (code == "101" || code == "53") {
      document.getElementById("screen").innerHTML += "5";
    } else if (code == "102" || code == "54") {
      document.getElementById("screen").innerHTML += "6";
    } else if (code == "103" || code == "55") {
      document.getElementById("screen").innerHTML += "7";
    } else if (code == "104" || code == "56") {
      document.getElementById("screen").innerHTML += "8";
    } else if (code == "105" || code == "57") {
      document.getElementById("screen").innerHTML += "9";
    }

    else if (code == "43" || code == "61") {
      document.getElementById("screen").innerHTML += "+";
    } else if (code == "45" || code == "45") {
      document.getElementById("screen").innerHTML += "-";
    } else if (code == "42" || code == "42") {
      document.getElementById("screen").innerHTML += "*";
    } else if (code == "47" || code == "47") {
      document.getElementById("screen").innerHTML += "/";
    }

    else if (code == "13") {
        result()
    }

}

// ======= onkeyDown ================
document.onkeydown = function (e) {
    code = e.keyCode;
    if (code == "46") {
      document.getElementById("screen").innerHTML = "";
    } else if (code == "8") {
      let back = document.getElementById("screen").innerHTML;
      back = back.substring(0, back.length - 1);
      document.getElementById("screen").innerHTML = back;
    }
  };


// =========== History Function =========================================================
document
.getElementById("historyButton")
.addEventListener("click", function (e) {
  flag = document.getElementById("historyButton").innerHTML;
  if (flag == "History") {
    document.getElementById("historyBar").style.display = "block";
    document.getElementById("historyButton").innerHTML = "Hide";
    showHistories();
  } else if (flag == "Hide") {
    document.getElementById("historyBar").style.display = "none";
    document.getElementById("historyButton").innerHTML = "History";
  }
});

document.getElementById("clear").addEventListener("click",function(e){
    localStorage.clear()
    document.getElementById("lists").innerHTML = ""
})

// ====== show history function ===============================
function showHistories() {
let histories = localStorage.getItem("histories");

if (histories == null) {
  historiesObj = [];
} else {
  historiesObj = JSON.parse(histories);
}
let html = "";
historiesObj.forEach(function (element, index) {
  html += `
          <div class="historyList">${element}</div>`;
          console.log(element)

});
let historiesElm = document.getElementById("lists");
if(historiesElm.length !=0){
  historiesElm.innerHTML = html;
}
}