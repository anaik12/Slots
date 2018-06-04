#pragma strict



var scriptname : GameObject; 

var spinStartScript : GameObject;

private var triggerWait :boolean;

public var newSpinSpeed : float;

function Start () {
	scriptname = GameObject.Find("SlotCamera");
	//spinStartScript = GameObject.Find("SpinBegin");
	//var bar = 
	//newSpinSpeed = 100.0;
	triggerWait = false;

}

// trigger spin on collision



function OnTriggerEnter (other : Collider) {

	triggerWait = true;
}

function OnTriggerStay(other : Collider){

    var myPosition = transform.position;
    //print("Position: " + myPosition);
    var spinPosition = scriptname.GetComponent(Get2DCoordinates).screenPos;

    var SpinButtonPosition = Vector3(spinPosition.x,spinPosition.y,0.0);
    if(triggerWait == true){
    yield WaitForSeconds(20); //Wait for 20 seconds
    scriptname.GetComponent(VegasSlots).leapSpin(SpinButtonPosition);
    }
}

function OnTriggerExit	(other : Collider){
	triggerWait = false;
}

function getnewSpinSpeed(){
	return newSpinSpeed;
}

function Update () {

}
