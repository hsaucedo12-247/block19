let freelancers = [
    { name: 'Alice', occupation: 'Writer', price: 30 },
    { name: 'Bob', occupation: 'Teacher', price: 50 }
];


const newFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];


function calculateAverage() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    return (total / freelancers.length).toFixed(2);
}


function updateFreelancers() {
    const table = document.querySelector('.tables');
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Occupation</th>
            <th>Starting Price</th>
        </tr>
    `; 

    freelancers.forEach(freelancer => {
        const row = table.insertRow();
        row.insertCell(0).textContent = freelancer.name;
        row.insertCell(1).textContent = freelancer.occupation;
        row.insertCell(2).textContent = `$${freelancer.price}`;
    });

    document.getElementById('average').textContent = `$${calculateAverage()}`;
}

function addFreelancer() {
    const randomIndex = Math.floor(Math.random() * newFreelancers.length);
    const newFreelancer = newFreelancers[randomIndex];
    freelancers.push(newFreelancer);
    updateFreelancers();
}


updateFreelancers();


setInterval(addFreelancer, 2000); 