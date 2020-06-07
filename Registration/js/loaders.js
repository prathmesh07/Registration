$(document).ready(function () {
    $(".sidenav").sidenav();
    $('.datepicker').datepicker();
        $('.tabs').tabs();
        $('input#input_text, textarea#textarea2').characterCounter();
    
        $(".modal").modal();
        $('select').formSelect();
        $('.dropdown-trigger').dropdown();
      });

//<!------------------------------------------------------------------------------------------------------------------->        
  
      function showPreview(event){
        if(event.target.files.length > 0){
          var src = URL.createObjectURL(event.target.files[0]);
          var preview = document.getElementById("file-ip-1-preview");
          preview.src = src;
          preview.style.display = "block";
        }
      }
//<!------------------------------------------------------------------------------------------------------------------->        


    function toggleModal() {
      var instance = M.Modal.getInstance($("#modal3"));
    
      instance.open();
    }

    
    function togglenext2() {
        var instance = M.Modal.getInstance($("#modal2"));
      
        instance.open();
      }

      function toggleback1() {
        var instance = M.Modal.getInstance($("#modal1"));
      
        instance.open();
      }
      function skill() {
        var instance = M.Modal.getInstance($("#skill"));
      
        instance.open();
      }
      function toggleback2() {
        var instance = M.Modal.getInstance($("#back2"));
      
        instance.open();
      }
      function togglenext3() {
        var instance = M.Modal.getInstance($("#next3"));
      
        instance.open();
      }
      function toggleback3() {
        var instance = M.Modal.getInstance($("#back3"));
      
        instance.open();
      }
      function submit() {
        var instance = M.Modal.getInstance($("#submit"));
      
        instance.open();
      }

//<!------------------------------------------------------------------------------------------------------------------->        

 // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    skill();
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
//<!------------------------------------------------------------------------------------------------------------------->        

function next1() {
    location.reload( location.replace("index.html#test2"));
   }
   function next2() {
     location.reload( location.replace("index.html#test3"));
    }
    function back1() {
     location.reload( location.replace("index.html#test1"));
    }
    function back2() {
     location.reload( location.replace("index.html#test2"));
    }
    function next3() {
     location.reload( location.replace("index.html#test4"));
    }
    function back3() {
     location.reload( location.replace("index.html#test3"));
    }

