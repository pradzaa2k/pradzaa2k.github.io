function n() {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

const s=names.map(x=>x[0]);

for(var i=0;i<10;i++)
{
		if(s[i]=="J"){
			byeSpeaker.speak(names[i]);
		}
		else{
			helloSpeaker.speak(names[i]);
		}
		
}
}
n();



