using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class enemy : MonoBehaviour {
	public  Transform[] target;
	public float speed;

	private int current;
	public static bool isMoving = true;

	public float scrollSpeed = 0.5F;
	// Use this for initialization
	void Start () {
		//StartCoroutine(movefront());
	}
	
	// Update is called once per frame
	void Update () {
		float offset = Time.time * scrollSpeed;

		if ((int)offset % 4 == 0) {
			isMoving = true;
		}
		if (transform.position != target [current].position && isMoving == true ) {
			Vector3 pos = Vector3.MoveTowards (transform.position, target [current].position, speed * Time.deltaTime);
			GetComponent<Rigidbody> ().MovePosition (pos);

		} else {
			current = (current + 1) % target.Length;
			isMoving = false;
		}
	}


}
