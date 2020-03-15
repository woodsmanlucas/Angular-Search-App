using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_Search_App.Models
{
    public class Person
    {
        [Key]
        public int PersonId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string address { get; set; }
        public string interests { get; set; }
        public int age { get; set; }
        public string picture_url { get; set; }
    }
}
