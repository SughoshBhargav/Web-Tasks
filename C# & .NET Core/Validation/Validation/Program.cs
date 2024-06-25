using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Validation
{
    internal class Program
    {


        public static bool nameExistsInList = false;
        static PersonalData[] Person = new PersonalData[10];
        public static int totalPersonCount = 0;
        static void Main(string[] args)
        {
            
            Person[totalPersonCount++] = new PersonalData("Anagha", 22, "Female");
            Person[totalPersonCount++] = new PersonalData("Suman",22,"Male");
            Person[totalPersonCount++] = new PersonalData("Suhas", 5, "Male");
            Person[totalPersonCount++] = new PersonalData("Dhanya", 18, "Female");
            Person[totalPersonCount++] = new PersonalData("Sridevi", 14, "Female");
                        
            while (true)
            {
                Console.Write("\n--------MENU--------\n1. Print Data\n2. Check Eligibility\n3. Insert Data\n4. Exit\n Choose any option : ");
                try{
                    int option = Convert.ToInt32(Console.ReadLine());
                    switch (option)
                    {
                        case 1:
                            PrintData(Person);
                            break;

                        case 2:
                            CheckValidity();
                            break;

                        case 4:
                            Environment.Exit(0);
                            break;

                        case 3:
                            InsertData();
                            break;

                        default:
                            Console.WriteLine("\nInvalid option\n");
                            break;
                    }
                }
                catch(Exception e)
                {
                    Console.WriteLine("\n"+e.Message);
                }
                
                
            }
        }

        public static void InsertData()
        {
            string name, gender;
            string age;
            int age_;
            
            Console.Write("\nEnter the name of the Person : ");
            name = Console.ReadLine();

            Console.WriteLine("\nEnter the gender of the Person (Male/Female) : ");
            gender = Console.ReadLine();

            Console.Write("\nEnter the age of the Person : ");
            age = Console.ReadLine();

            if (!(int.TryParse(age, out age_)))
            {
                Console.WriteLine("\nError!!!! Wrong input for Age!!!! Enter only numbers ");
            }
            else
            {
                Person[totalPersonCount++] = new PersonalData(name, age_, gender);
            }

        }

        public static void PrintData(PersonalData[] Person)
        {
            Console.WriteLine();

            for (int i = 0; i < totalPersonCount; i++)
            {
                Console.WriteLine(Person[i]);
            }
            Console.WriteLine();
        }

        public static void CheckValidity()
        {
            Console.Write("\nEnter the Name of the Person to check for voting Eligibility : ");

            string name = Console.ReadLine();

            if (CheckEligibility(name.ToLower(), Person))
            {
                Console.WriteLine($"\n{name} is Eligible for voting\n");
            }

            else if (!nameExistsInList)
            {
                Console.WriteLine($"\nThe username {name} is not available in the list\n");
            }
            else
            {
                Console.WriteLine($"\n{name} is not eligibl for voting \n");
            }
        }


        public static bool CheckEligibility(string name, PersonalData[] Person)
        {
            nameExistsInList = false;
            for (int i = 0; i < totalPersonCount; i++)
            {
                if (name == Person[i].Name.ToLower())
                {
                    nameExistsInList = true;
                    if (Person[i].Age >= 18)
                    {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
