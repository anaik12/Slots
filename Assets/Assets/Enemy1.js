#pragma strict


public var  target : Transform[];
public var speed : float;

private var current : int;
public var isMoving : boolean;

public var scrollSpeed :float;

public var rb: Rigidbody;


function Awake(){
	isMoving = true;
	scrollSpeed = 0.5F;
}

function Update () {
	var offset = Time.time * scrollSpeed;

	if ((parseInt(offset) % 3 == 0)) {
			isMoving = true;
	}
	if (transform.position != target [current].position && isMoving == true ) {
		var pos = Vector3.MoveTowards (transform.position, target [current].position, speed * Time.deltaTime);
		rb.MovePosition(pos);

	} else {
		current = (current + 1) % target.Length;
		isMoving = false;
	}
}

