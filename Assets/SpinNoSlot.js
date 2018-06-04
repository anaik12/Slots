#pragma strict



//var scriptname : GameObject; 
var scorename : GameObject; 

//var spinStartScript : GameObject;

//public var newSpinSpeed : float;
var score : int;
var scriptname : GameObject; 

function Start () {
	//scriptname = GameObject.Find("SlotCamera");
	score = 0;
	scorename = GameObject.Find("Coins");
	scorename.GetComponent.<TextMesh>().text = score.ToString();
	scriptname = GameObject.Find("SpinSphere");
}

// trigger spin on collision



function OnTriggerEnter (other : Collider) {

   
    //scriptname.GetComponent(VegasSlots).leapSpin(SpinButtonPosition);
    //scorename.GetComponent.<TextMesh>().text = "Hello World";
    if (scriptname.GetComponent(Enemy1).isMoving == false){
    score = score + 100;
    //audio.Play();
    GetComponent.<AudioSource>().Play();
    scorename.GetComponent.<TextMesh>().text = score.ToString();
    }

   
}

function OnTriggerStay(other : Collider){

}

function OnTriggerExit	(other : Collider){
	//spinStartScript.GetComponent(SpinStart).enterSpinStart = false;
}


function Update () {

}
