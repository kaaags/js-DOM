/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

document.getElementById('name1').innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

document.getElementById('position2').innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

document.getElementById('alias3').innerHTML = 'Concatenation';


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

document.getElementsByClassName('profile')[0].innerHTML='Underneath the purple rain';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

document.getElementsByClassName('profile')[1].innerHTML = 'Add what is useful, reject what is useless, and add what is specifically your own';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

document.getElementsByClassName('alias')[2].innerHTML = 'Major Marquis Warren';

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var divName7 = document.createElement('div');
var textName7 = document.createTextNode('Peter Griffin');
divName7.appendChild(textName7);
document.getElementById('nameParent').appendChild(divName7);
document.getElementById('nameParent').style.textAlign = 'center';

/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var divAlias8 = document.createElement('div');
var textAlias8 = document.createTextNode('Old Man Riverwalk');
divAlias8.appendChild(textAlias8);
document.getElementById('aliasParent').appendChild(divAlias8);
document.getElementById('aliasParent').style.textAlign = 'center';

//Final Boss
/*9. Create your own profile.*/

var myProf = document.createElement('div');
