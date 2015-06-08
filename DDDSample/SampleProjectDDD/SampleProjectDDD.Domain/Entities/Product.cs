

using SampleProjectDDD.Domain.Entities;
namespace SampleProjectDDD.Domain.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public bool  IsAvailable { get; set; }
        public int  CustomerId { get; set; }
        public virtual Customer Customer { get; set; }
    }
}
