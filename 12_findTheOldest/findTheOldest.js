const findTheOldest = function(people) {
    let currentTime = new Date();
    people.forEach(function(person) {
        if (person.hasOwnProperty('yearOfDeath')){
            person.age = (person.yearOfDeath-person.yearOfBirth);
        } else person.age = currentTime.getFullYear() - person.yearOfBirth;
    });
    console.log(people.sort((a,b) => b.age - a.age));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
