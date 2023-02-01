 //  index :         0        1        2       3       4         5        6        7        8         
 const colors = ['orange', 'blue', 'yellow', 'red', 'purple', 'green', 'black', 'white', 'pink'];

 const randomIndex = Math.floor(Math.random() * colors.length );
 
 const randomColor = colors[randomIndex];
 
 switch (randomColor) {
   case 'orange':
   console.log('the color is orange');
   break;
   case  'blue':
   console.log('the color is blue');
   break; 
   case  'yellow':
   console.log('the color is yellow');
   break;
   case  'red':
   console.log('the color is red');
   break;
   case  'purple':
   console.log('the color is purple');
   break;
   case  'green':
   console.log('the color is green');
   break; 
   case  'black':
   console.log('the color is black');
   break;
   case  'white':
   console.log('the color is white');
   break; 
   case  'pink':
   console.log('the color is pink');
   break; 
   default :
   console.log('no color found');
 } 