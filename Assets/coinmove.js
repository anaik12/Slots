#pragma strict

var scrollSpeed:float = 0.5F;
var moveCount :int  = 0;
var scriptname : GameObject;

function Start () {
	
}

function FixedUpdate () {
	//spinState = this.GetComponent(Spin).move;
	//Debug.Log(spinState);
	var offset = Time.time * scrollSpeed;
	if(offset % 3 == 0 && offset % 3 < 0.01F){
		//transform.position = new Vector3 (Random.Range (-0.27f, 0.27f), Random.Range (.27f, .72f), -1.5f); //for capsulespin
		transform.position = new Vector3 (Random.Range (-0.54f, 0.53f), Random.Range (-0.30f, 0.16f), -1.4f); //Random.Range (-1.3f, -1.3f));
		moveCount = moveCount + 1;
		//spinState = false;
	}
}
