using UnityEngine;
using LMWidgets;
	

public class SliderToFloatDataBinderCollider : DataBinderSlider {
	public float outputValue = 0.0f;
	public float min = 0.0f;
	public float max = 0.0f;

	public BoxCollider box;
	// Use this for initialization
	void Awake(){
		Mathf.Clamp (outputValue, min, max);
		base.Awake (); //required if using Awake!
	}

	override public float GetCurrentData() {
		return (outputValue - min)/(max - min);
	}

	override protected void setDataModel(float value) {
		outputValue = value * (max - min) + min;
		//print (outputValue);
		//print("HandMovementScale: " +handCtrl.handMovementScale);

		box = GetComponent<BoxCollider> ();
		print(box.size);
		box.size = new Vector3 (outputValue,outputValue,outputValue);
		print ("outputValue: " + outputValue);
		print(box.size);
		//box.size.y = outputValue;
		//box.size.z = outputValue;
		//BoxCollider box = GetComponent<BoxCollider> ();
		//print (capsule.height);

	}
}
