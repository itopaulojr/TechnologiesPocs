
using System;
using System.Collections.Generic;
namespace SampleProjectDDD.Domain.Entities
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime CreationDate { get; set; }
        public bool Active { get; set; }
        public virtual IEnumerable<Product> Products { get; set; }

        public bool IsSpectialCustomer()
        {
            return this.Active && DateTime.Now.Year - CreationDate.Year >= 5;
        }
    }
}
