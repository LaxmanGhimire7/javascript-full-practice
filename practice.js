//extracting just activities, name and total weigh of friends of cat i.e, bar and foo

var cat = {
  name: 'Fluffyy',
  activities: ['play', 'eat cat food'],
  catFriends: [
    {
      name: 'bar',
      activities: ['be grumpy', 'eat bread omblet'],
      weight: 8,
      furcolor: 'white'
    },
    {
      name: 'foo',
      activities: ['sleep', 'pre-sleep naps'],
      weight: 3
    }
  ]
};

let sum = 0;

cat.catFriends.forEach((name)=>{
  console.log(name.name);
})

cat.catFriends.forEach((lakxh)=>{
  sum=sum+lakxh.weight
  lakxh.activities.forEach((friend)=>{
    console.log(friend);

  })
})
console.log(sum);

//2 extracting just phohe number p1 and p2
const userData = [
  {
    name: "John",
    age: 25,
    address: "Ktm",
    phone: [{
      p1: 988475684,
      p2: 9579458495
    }]
  }
]

userData.forEach((number)=>{
 number.phone.forEach((num)=>{
  console.log(num.p1);
  console.log(num.p2);
 })
})


