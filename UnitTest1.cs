namespace today.TestProject1 
{
    public class Tests
{
        Diak diak = new Diak(17);
        [SetUp]
    public void Setup()
    {

    }

    [Test]
    public void Test1()
    {
        
            Assert.IsTrue(diak.felnott_e());
            //Assert.IsFalse(diak.felnott_e());
    }
        [Test]
        public void Test2()
        {
            Assert.GreaterOrEqual(diak.oregszik(),18);
        }
        [Test]
        public void Test3()
        {
            var result = diak.felnott_e();
            Assert.That(result, Is.True, "Még gyerek");
            
        }


        [TestCase(17)]

        public void test4(int value)
        {

            Assert.Less(diak.vizvalaszt(value), 0);

        }
        [TestCase(19)]

        public void test5(int value)
        {

            Assert.Greater(diak.vizvalaszt(value), 0);

        }
        [TestCase(18)]

        public void test6(int value)
        {

            Assert.Zero(diak.vizvalaszt(value));

        }
    }
}