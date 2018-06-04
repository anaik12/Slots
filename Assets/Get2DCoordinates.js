#pragma strict

public var target: Transform;
var camera1: Camera;
public var screenPos : Vector3;

function Start(){
	camera1 = GetComponent.<Camera>();

}

function Update(){
	screenPos = camera1.WorldToScreenPoint(target.position);
	//Debug.Log("Spin is: " + screenPos.x + " pixels from the left and " + screenPos.y + " from the top" );

}


