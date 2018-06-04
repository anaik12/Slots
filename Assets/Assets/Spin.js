#pragma strict



var scriptname : GameObject; 
var scriptname1 : GameObject; 

var spinStartScript : GameObject;

var hitCountObject : GameObject;

private var shader1:Shader;
private var shader2:Shader;
var rend:Renderer;
public var mr: MeshRenderer;
public var move: boolean;

public var newSpinSpeed : float;
//public var hitCount = 0;


function Start () {
	scriptname = GameObject.Find("SlotCamera");

	newSpinSpeed = 50.0;
	rend = mr;
	shader1 = Shader.Find ("Unlit/Texture");
	shader2 = Shader.Find ("VertexLit");
}

function Update(){
	if(!(scriptname.GetComponent(VegasSlots).spinning)){
		enableRend();
	}
}



function OnTriggerEnter (other : Collider) {

   if(rend.enabled == true){
   	GetComponent.<AudioSource>().Play();
   }
    var myPosition = transform.position;

    var spinPosition = scriptname.GetComponent(Get2DCoordinates).screenPos;

    var SpinButtonPosition = Vector3(spinPosition.x,spinPosition.y,0.0);
    rend.enabled = false;
    move = true;
    this.GetComponent(Collider).isTrigger = false;
    scriptname.GetComponent(VegasSlots).leapSpin(SpinButtonPosition);
	
}


function getnewSpinSpeed(){
	return newSpinSpeed;
}

function enableRend(){
	rend.enabled = true;
	this.GetComponent(Collider).isTrigger = true;
	move = false;

}



