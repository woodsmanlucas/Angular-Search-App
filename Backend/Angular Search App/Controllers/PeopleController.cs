using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular_Search_App.Models;
using Microsoft.AspNetCore.Mvc;

namespace Angular_Search_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        public PeopleContext _db;

        public PeopleController(PeopleContext db)
        {
            _db = db;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(_db.People);
        }

        // GET api/values/5
        [HttpGet]
        [Route("seed")]
        public ActionResult<string> Seed()
        {
            Seeder seeder = new Seeder(_db);
            return Ok();
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return Ok(_db.People.Find(id));
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] Person person)
        {
            if (ModelState.IsValid)
            {
                _db.Add(person);
                _db.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Person person)
        {
            Person updatedPerson = _db.People.Find(id); 
            if (person.firstName != null)
            {
                updatedPerson.firstName = person.firstName;
            }
            if (person.lastName != null)
            {
                updatedPerson.lastName = person.lastName;
            }
            if(person.age != 0)
            {
                updatedPerson.age = person.age;
            }
            if(person.address != null)
            {
                updatedPerson.address = person.address;
            }
            if(person.interests != null)
            {
                updatedPerson.interests = person.interests;
            }
            if(person.picture_url != null)
            {
                updatedPerson.picture_url = person.picture_url;
            }
            _db.Attach(_db.People.Find(id));
            _db.Update(updatedPerson);
            _db.SaveChanges();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _db.People.Remove(_db.People.Find(id));
            _db.SaveChanges();
            return Ok();
        }
    }
}
