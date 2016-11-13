import { surname } from "./b";

var info =  {
	"name" : "Jonh",
	"surname" : surname
}

export function fullName() {
	return info.name + " - " + info.surname;
}