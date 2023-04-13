// Problem 1
const sam = {
    firstName: 'Sam',
    department: 'Tech',
    designation: 'Manager',
    salary: 40000,
    raiseEligible: true
  };

  const mary = {
    firstName: 'Mary',
    department: 'Finance',
    designation: 'Trainee',
    salary: 18500,
    raiseEligible: true
  };

  const bill = {
    firstName: 'Bill',
    department: 'HR',
    designation: 'Executive',
    salary: 21200,
    raiseEligible: false
  };

  console.log("problem 1: ");
  console.log(sam);
  console.log(mary);
  console.log(bill);

  // Problem 2
  const techStars = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: [sam, mary, bill]
  };

  console.log("problem 2: ");
  console.log(techStars);

  // Problem 3
  const anna = {
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false
  };

  console.log("problem 3: ");
  techStars.employees.push(anna);

  console.log(anna);

  // Problem 4
  let totalSalary = 0;
  techStars.employees.forEach(employee => {
    totalSalary += employee.salary;
  });

  console.log("problem 4: ");
  console.log('Total salary for all company employees:', totalSalary);

  // Problem 5
  techStars.employees.forEach(employee => {
    if (employee.raiseEligible) {
      const raiseAmount = employee.salary * 0.1;
      employee.salary += raiseAmount;
      employee.raiseEligible = false;
    }
  });

  console.log("problem 5: ");
  console.log(techStars.employees);

  // Problem 6
  const workingFromHome = ['Anna', 'Sam'];
  techStars.employees.forEach(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
  });

  console.log("problem 6: ");
  console.log(workingFromHome);