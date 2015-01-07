if (Meteor.isClient) {

	Session.set('content', 'hello hello hello');

	Template.hello.helpers({
		renderContent: function () {
			return Session.get("content");
		}
	});

	Template.hello.events({
		'mouseup .content': function (event, templateInstance) {
			var selection = window.getSelection();
			var range = selection.getRangeAt(0);
			var start = '<span class="start"></span>';
			var end = '<span class="end"></span>';
			range.insertNode($(start)[0]);
			range.collapse(false);
			range.insertNode($(end)[0]);

			Session.set('content', 'goodbye goodbye');
		}
	});
}
