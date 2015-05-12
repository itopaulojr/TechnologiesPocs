using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace angujarjspoc.Controllers
{
    public class EmployeeController : Controller
    {

        private List<Employee> Employees
        {
            get
            {
                if (Session["Employees"] == null)
                {
                    List<Employee> employees = new List<Employee>();
                    for (int i = 0; i < 10; i++)
                    {
                        Employee employee = new Employee();
                        employee.Id = Guid.NewGuid().ToString();
                        employee.Address = i.ToString();
                        employee.AddressNumber = i.ToString();
                        employee.Apartment = i.ToString();
                        employee.BlockName = i.ToString();
                        employee.Entrace = i.ToString();
                        employee.Floor = i.ToString();
                        employee.Name = i.ToString();
                        employees.Add(employee);
                    }
                    Session["Employees"] = employees;
                }

                return (List<Employee>)Session["Employees"];
            }
        }

        //
        // GET: /Employee/
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Employess()
        {

            return Json(Employees, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Employess(Employee newEmployee)
        {
            Employee currentEmployee = null;
            if (string.IsNullOrEmpty(newEmployee.Id))
            {
                newEmployee.Id = Guid.NewGuid().ToString();
                currentEmployee = newEmployee;
                Employees.Add(currentEmployee);
            }
            else
            {
                currentEmployee = Employees.First(x => x.Id == newEmployee.Id);
            }

            currentEmployee.Name = newEmployee.Name;
            currentEmployee.Address = newEmployee.Address;
            currentEmployee.AddressNumber = newEmployee.AddressNumber;
            currentEmployee.Apartment = newEmployee.Apartment;
            currentEmployee.BlockName = newEmployee.BlockName;
            currentEmployee.Entrace = newEmployee.Entrace;
            currentEmployee.Floor = newEmployee.Floor;

            return Json(currentEmployee, JsonRequestBehavior.AllowGet);
        }
    }

    public class Employee
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string AddressNumber { get; set; }
        public string BlockName { get; set; }
        public string Entrace { get; set; }
        public string Floor { get; set; }
        public string Apartment { get; set; }
        public string Type { get; set; }

        public string Id { get; set; }
    }
}