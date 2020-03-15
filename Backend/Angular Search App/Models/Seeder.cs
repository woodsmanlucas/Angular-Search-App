using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_Search_App.Models
{
    public class Seeder
    {
        private PeopleContext db;
        public Seeder(PeopleContext db)
        {
            this.db = db;
            SeedData();
        }

        public void SeedData()
        {
            Person[] seedPeople = new Person[]
            {
                new Person { firstName = "Jane", lastName="Chen", address="Vancouver", age= 28, interests="mountain biking, skiing", picture_url="https://images.pexels.com/photos/3905907/pexels-photo-3905907.jpeg?cs=srgb&dl=woman-in-white-shirt-and-blue-denim-shorts-holding-yellow-3905907.jpg&fm=jpg"},
                new Person { firstName="Jeff", lastName="Johnson", address="Kamloops", age=31, interests="3d Printing, mini painting, photography", picture_url="https://images.pexels.com/photos/3651814/pexels-photo-3651814.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
                new Person { firstName="Pam", lastName="Rogers", address="Richmond", age=72, interests="weighttraining, knife sharpening, cooking", picture_url="https://images.pexels.com/photos/3867213/pexels-photo-3867213.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
                new Person { firstName="Baljeet", lastName="Singh", address="Seattle", age=42, interests="botany, music, video games", picture_url="https://images.pexels.com/photos/1879876/pexels-photo-1879876.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}
            };

            db.AddRange(seedPeople);
            db.SaveChanges();
        }
    }
}
