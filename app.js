let age = 20;
if (age >=18){
  console.log('He can drink beer')
} else {
  console.log('Drink juice')
}

 age >=18 ? console.log('He can drink beer') : console.log('Drink juice')


switch(true) {
  case age < 13:
    console.log('John is a boy')
    break;
  case 13 < age <20:
    console.log('John is a teenager')
    break;
  case 20 < age < 30:
    console.log('John is a yooung man')
    break;
  default:
    console.log('Jon is a man')
}