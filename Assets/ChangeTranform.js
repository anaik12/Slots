#pragma strict

public var scrollSpeed :float;
var scriptname : GameObject;

function Start () {
	scriptname = GameObject.Find("SpinSphere");
}

function Update () {
	var offset = Time.time * scrollSpeed;

	if ((parseInt(offset) % 3 == 0)&& scriptname.GetComponent(Enemy1).isMoving == false) {
			transform.position = new Vector3 (Random.Range (-0.45f, 0.45f), Random.Range (.25f, .75f), -1.51f);
	}
}
