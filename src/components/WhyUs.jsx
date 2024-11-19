import React from "react";

const WhyUs = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-5 text-deepOceanBlue">
          The WildPursuit Advantage
        </h1>
        <p className="text-gray-600">
          Experience eco-friendly adventures crafted for thrill-seekers who care
          about the planet
        </p>
      </div>
      <div className="grid grid-cols-2 py-20 px-10 gap-5">
        <div className="col-span-1">
          <img
            src="https://wallpapers.com/images/featured/snow-mountain-ydg6x966wun8nkjs.jpg"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className="space-y-4 col-span-1">
          {/* FAQ 1: What is an Eco-Trek? */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-bold">
              What is an Eco-Trek?
            </div>
            <div className="collapse-content text-sm">
              <p>
                An Eco-Trek is a sustainable trekking experience where you
                explore nature’s beauty while minimizing environmental impact.
                On this adventure, you'll learn about local ecosystems,
                conservation efforts, and responsible travel practices.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Guided by local experts with a deep understanding of the
                  environment
                </li>
                <li>
                  Eco-friendly travel practices, including waste reduction and
                  conservation
                </li>
                <li>
                  Opportunities to contribute to local communities and
                  preservation efforts
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ 2: How do we protect the environment during adventures? */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              How do we protect the environment during adventures?
            </div>
            <div className="collapse-content text-sm">
              <p>
                Protecting the environment is at the core of all our adventures.
                We follow strict guidelines to ensure our activities do not
                disturb natural habitats and wildlife. We also encourage our
                guests to take part in eco-friendly practices during their
                trips.
              </p>
              <ul className="list-disc pl-6">
                <li>Carrying out "Leave No Trace" practices</li>
                <li>Using eco-friendly equipment and gear</li>
                <li>Educating travelers about sustainable tourism</li>
                <li>Collaborating with local conservation projects</li>
              </ul>
            </div>
          </div>

          {/* FAQ 3: What should I pack for an eco-friendly adventure? */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              What should I pack for an eco-friendly adventure?
            </div>
            <div className="collapse-content text-sm">
              <p>
                Packing for an eco-friendly adventure means bringing sustainable
                and lightweight gear that minimizes your environmental impact.
                Here’s a quick checklist of essentials to bring along:
              </p>
              <ul className="list-disc pl-6">
                <li>Reusable water bottle and snacks</li>
                <li>Eco-friendly toiletries (biodegradable soap, etc.)</li>
                <li>Solar-powered or rechargeable gadgets</li>
                <li>Clothing made from sustainable materials</li>
                <li>Personal waste bags for responsible disposal</li>
              </ul>
            </div>
          </div>

          {/* FAQ 4: Can beginners join these eco-friendly adventures? */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Can beginners join these eco-friendly adventures?
            </div>
            <div className="collapse-content text-sm">
              <p>
                Yes! Our eco-friendly adventures are designed for all levels of
                experience. Whether you're a seasoned traveler or a beginner,
                our expert guides will ensure that you have a safe and enjoyable
                time while respecting nature.
              </p>
              <ul className="list-disc pl-6">
                <li>Beginner-friendly treks and activities</li>
                <li>Guided tours for safe exploration</li>
                <li>Emphasis on education and eco-awareness</li>
              </ul>
            </div>
          </div>

          {/* FAQ 5: How do I prepare for the physical demands of an eco-adventure? */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              How do I prepare for the physical demands of an eco-adventure?
            </div>
            <div className="collapse-content text-sm">
              <p>
                Preparation is key to making the most of your eco-adventure. We
                recommend starting with some light cardio exercises like hiking,
                walking, or swimming a few weeks before your trip. This will
                help you get accustomed to the physical demands of the journey.
              </p>
              <ul className="list-disc pl-6">
                <li>Start training 2-3 weeks before your trip</li>
                <li>Focus on building endurance and strength</li>
                <li>
                  Consult your guide about any specific physical requirements
                </li>
                <li>Stay hydrated and maintain a balanced diet</li>
              </ul>
            </div>
          </div>

          {/* FAQ 6: Are these adventures suitable for families? */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Are these adventures suitable for families?
            </div>
            <div className="collapse-content text-sm">
              <p>
                Absolutely! Our eco-friendly adventures are family-friendly and
                can be tailored to suit the interests and abilities of all
                family members. Whether it’s a gentle forest walk or a more
                active trek, we ensure that everyone has a memorable experience.
              </p>
              <ul className="list-disc pl-6">
                <li>Child-friendly activities and guides</li>
                <li>Customizable itineraries for families</li>
                <li>Safe and enjoyable for all ages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
