#pragma strict


var scriptname : GameObject; 

var spinStartScript : GameObject;

public var newSpinSpeed : float;

function Start () {
	scriptname = GameObject.Find("SlotCamera");
	//spinStartScript = GameObject.Find("SpinBegin");
	//var bar = 
	newSpinSpeed = 100.0;
}

// trigger spin on collision



function OnTriggerEnter (other : Collider) {
    //Destroy(other.gameObject);
   // print("end " + Time.deltaTime);
   print("end " );

    var myPosition = transform.position;
    //print("Position: " + myPosition);
    var SpinButtonPosition = Vector3(165.0,449.0,0.0);
    print(myPosition);
    	    var velocity = other.attachedRigidbody.velocity;
   // print("Velocity " + velocity.x);
    if(velocity.x > 10 && velocity.x < 200){
    	newSpinSpeed = velocity.x;
    }

    //print("before");
    //scriptname.GetComponent(VegasSlots).GenerateNewReels();
    //scriptname.GetComponent(VegasSlots).Click(SpinButtonPosition);
    //scriptname.GetComponent(VegasSlots).Update();

    //if(spinStartScript.GetComponent(SpinStart).enterSpinStart == true) {
    scriptname.GetComponent(VegasSlots).leapSpin(SpinButtonPosition);
    //}
    //print("after");
}

function OnTriggerStay(other : Collider){

}

function OnTriggerExit	(other : Collider){
	//spinStartScript.GetComponent(SpinStart).enterSpinStart = false;
}

function getnewSpinSpeed(){
	return newSpinSpeed;
}

function Update () {

}
