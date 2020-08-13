describe(‘Adress Book’, function(){
	it(‘should be able to add a contact’,  function(){
	
	

	beforeEach(function(){
			var addressBook = new AdressBook();
		thisContact = new Contact();
	});
	addressBook.addContact(thisContact);
	expect(adressBook.getContact(0)).toBe(thisContact);
});	
});


function AddressBook() {
	this.contacts = [];
}

AddressBook.prototype.addContact = function(contact){
	this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index){
	return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index){
	this.contacts.splice(index, 1);
}


it('should be able to delete a contact', function(){
	var addressBook = new AdressBook();
		thisContact = new Contact();
	
	addressBook.addContact(thisContact);
	addressBook.deleteContact(0);
	expect(adressBook.getContact(0)).not.toBeDefined();
});