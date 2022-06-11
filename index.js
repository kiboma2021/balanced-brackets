function isBalanced(str) {
  let mystack=[];

  for(let i=0;i<str.length;i++) {
    if(str.charAt(i)=='(' || str.charAt(i)=='[' || str.charAt(i)=='{') 
    {
      mystack.push(str.charAt(i));
      } else if (str.charAt(i)==')') {
        if(mystack.length==0){
          return false;
        } else {
          if(mystack[mystack.length-1]!='(') {
            return false;
          } else {
            mystack.pop()
          }
        }
      } else if (str.charAt(i)==']') {
      if(mystack.length==0){
        return false;
      } else {
        if(mystack[mystack.length-1]!='[') {
          return false;
        } else {
          mystack.pop()
        }
      }
      } else if (str.charAt(i)=='}') {
      if(mystack.length==0){
        return false;
      } else {
        if(mystack[mystack.length-1]!='{') {
          return false;
        } else {
          mystack.pop()
        }
      }
    }
  }
  return true;
}

//True cases
console.log("True cases")
console.log(isBalanced("(((Hey hell no)))"));
console.log(isBalanced("(([fghjkl]))"));
console.log(isBalanced("Annita:(({[]}))"));

//True cases
console.log("False cases")
console.log(isBalanced("((Hey hell no)))"));
console.log(isBalanced("()[fghjkl]())"));
console.log(isBalanced("())ddddd)"));