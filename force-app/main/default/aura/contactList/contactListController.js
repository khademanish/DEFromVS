({
	doInit : function(component, event, helper) {
		var action=component.get("c.findAll");
        
        action.setCallback(this, function(response){
           component.set("v.contacts",response.getReturnValue()); 
        });
        $A.enqueueAction(action);
	}
})