let str=['aab','abab','abb'];
for(let i=0;i<str.length;i++){
for(let j=0;j<str[i].length;j++){
if(str[i].charAt(j).equals(str[i].charAt(j+1))){
  str[i].charAt(j).remove();
}
}
}
