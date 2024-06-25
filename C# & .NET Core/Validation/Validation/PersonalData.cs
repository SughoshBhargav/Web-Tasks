using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Text;
using System.Threading.Tasks;

namespace Validation
{
    internal class PersonalData
    {
        private string name;
        private int age;
        private string gender;

        public PersonalData(string name,int age,string gender) {
            this.age = age;
            this.gender = gender;   
            this.name = name;   
        }

        public string Name   
        {
            get { return name; }
            set { name = value; }
        }

        public int Age
        {
            get { return age; }
            set { age = value; }
        }

        public string Gender
        {
            get { return gender; }
            set { gender = value; }
        }

        public override string ToString()
        {
            string personalData = $"Name : {name}, Age : {age}, Gender : {gender}";
            return personalData;
        }
    }
}
