
    function rainbowColor() {

        let f = 0;
        let g = 0;
  
        while(f<count) {
          document.getElementById(f).addEventListener("mouseenter", function( event ) {   
        
        
          // highlight the mouseenter target
          event.target.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);})
          f++;
      }
  
      }
  
  
  
  
  
      function tileOpacity() {
  
        let f = 0;
        let g = 0;
  
        while(f<count) {
          document.getElementById(f).addEventListener("mouseenter", function( event ) {   
          
          g += 0.1;
          
          // highlight the mouseenter target
          event.target.style.opacity = g;
          event.target.style.backgroundColor = "black";})
          f++;
        }
  
      }
  
  
  
      let count = 16*16;
      function buttonClick() {
  
      let e = 0;
      let cont;
  
      while(e<count) {
  
        
          // Removes an element from the document
          cont = document.getElementById(e);
          cont.remove();
  
      //   cont = document.getElementById(e);
  
      //   cont.style.cssText = 'color: blue; background: #5995DA';          
          e++;
      }
  
      let value = prompt("How many squares per side would you like to make the new grid? (more squares means smaller squares)");
      count = value*value;
      let pixels = 480/value;
      let x=0;
      while(x<value*value) {
        const container = document.querySelector('#container');
        const div = document.createElement('div');
        div.style.width = pixels + "px";
        div.style.height = pixels + "px";
        div.setAttribute('id', x); 
        div.addEventListener("mouseenter", function( event ) {   
          // highlight the mouseenter target
          event.target.style.backgroundColor = "purple";})
  
        container.appendChild(div);
        x++;
      }; 
  
  
    }
  
    let i=0;
    while(i<16*16) {
      const container = document.querySelector('#container');
      const div = document.createElement('div');
      div.setAttribute('id', i); 
      div.addEventListener("mouseenter", function( event ) {   
        // highlight the mouseenter target
        event.target.style.backgroundColor = "purple";})
  
      container.appendChild(div);
      i++;
    }; 
  
  