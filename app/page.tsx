import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Heart, Shield, Users, Sprout, BookOpen, ArrowRight, Images } from "lucide-react"

export default function BothobaPeloFoundation() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/images/logo.jpg" alt="Bothoba-Pelo Foundation Logo" className="h-10 w-10 object-contain" />
              <div>
                <h3 className="text-lg font-bold text-red-600">Bothoba-Pelo Foundation</h3>
                <p className="text-xs text-gray-600">"Caring for Lives..."</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-red-600 font-medium">
                Services
              </a>
              <a href="/gallery" className="text-gray-700 hover:text-red-600 font-medium">
                Gallery
              </a>
              <a href="#blog" className="text-gray-700 hover:text-red-600 font-medium">
                Resources
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium">
                Contact
              </a>
            </div>
            <Button className="bg-red-600 hover:bg-red-700">Get Support</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-blue-50 to-green-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-red-100 text-red-700 px-4 py-2 text-sm font-medium">
                  Free Psychosocial Support Available
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">Caring for Lives</span> Amidst{" "}
                  <span className="text-blue-600">Climate Change</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Bothoba Pelo Foundation provides free, compassionate psychosocial support to help individuals and
                  communities in Lesotho navigate the mental health impacts of climate change.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Support: 58001600
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read Our Resources
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">Free</div>
                  <div className="text-sm text-gray-600">Support Services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Confidential</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/young-woman-planting.jpg"
                alt="Young woman planting a tree in Lesotho landscape"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-medium">Building resilience through positive environmental action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="about" className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing the mental health impacts of climate change in Lesotho
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <Heart className="mr-2 h-6 w-6" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To provide free, compassionate, and culturally sensitive psychosocial support services that empower
                  individuals and communities in Lesotho to navigate the mental health impacts of climate change,
                  fostering resilience, hope, and adaptive coping strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <Sprout className="mr-2 h-6 w-6" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  A Lesotho where communities thrive, resilient in the face of climate change, with mental well-being
                  prioritized and supported for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Climate Change is a <span className="text-red-600">Mental Health Crisis</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In Lesotho, communities are experiencing profound psychological impacts from environmental changes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Eco-Anxiety</h3>
                <p className="text-gray-600 text-sm">
                  Chronic worry and fear about environmental degradation and the future of our planet
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Climate Stress</h3>
                <p className="text-gray-600 text-sm">
                  Direct psychological distress from droughts, unpredictable weather, and food insecurity
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Grief & Loss</h3>
                <p className="text-gray-600 text-sm">
                  Emotional responses to loss of traditional livelihoods and cultural practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                  <Sprout className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Hopelessness</h3>
                <p className="text-gray-600 text-sm">
                  Feelings of powerlessness in the face of overwhelming environmental shifts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Free Psychosocial Support <span className="text-green-600">(PSS)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core services are designed to be accessible, confidential, and tailored to climate-related mental
              health needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Coping with Eco-Anxiety</h3>
                    <p className="text-gray-600">
                      Safe space to process environmental fears and learn strategies to manage overwhelming emotions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Managing Climate Stress</h3>
                    <p className="text-gray-600">
                      Support for dealing with direct psychological impacts and building practical coping mechanisms
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Building Emotional Resilience</h3>
                    <p className="text-gray-600">
                      Tools and strategies to enhance inner strength and adaptability for ongoing challenges
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sprout className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Finding Hope in Crisis</h3>
                    <p className="text-gray-600">
                      Guidance to identify sources of strength and explore pathways for positive action
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-800 mb-2">Additional Support:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Community & Group Support Sessions</li>
                  <li>• Strict Confidentiality & Safety Protocols</li>
                  <li>• Culturally Sensitive Approaches</li>
                  <li>• Crisis Intervention Services</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="/images/tree-planting-community.jpg"
                alt="Community tree planting event"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/images/community-group.jpg"
                alt="Community support group"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Resources Preview */}
      <section id="blog" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Resources & Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Articles, guides, and stories on climate change and mental health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-red-100 text-red-700">Eco-Anxiety</Badge>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Understanding Eco-Anxiety in Lesotho Communities
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploring how environmental concerns affect mental health in rural communities...
                </p>
                <Button variant="outline" size="sm">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-blue-100 text-blue-700">Resilience</Badge>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Building Climate Resilience Together</h3>
                <p className="text-gray-600 mb-4">
                  Community-based approaches to strengthening mental health in changing times...
                </p>
                <Button variant="outline" size="sm">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-green-100 text-green-700">Hope</Badge>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Finding Hope Through Action</h3>
                <p className="text-gray-600 mb-4">
                  How environmental action can be a pathway to healing and empowerment...
                </p>
                <Button variant="outline" size="sm">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <BookOpen className="mr-2 h-5 w-5" />
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Connected</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Get updates on our programs, resources, and community events. Join our newsletter for mental health tips
              and climate resilience strategies.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-600"
              />
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-6">Subscribe</Button>
            </div>
            <p className="text-sm text-red-100 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Support Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to talk? We're here to listen. Reach out for free, confidential support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Call for Support</h3>
                    <p className="text-gray-600">58001600(W)</p>
                    <p className="text-sm text-gray-500">Available for immediate support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Email Us</h3>
                    <p className="text-gray-600">bothobapelofoundation@gmail.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Visit Us</h3>
                    <p className="text-gray-600">
                      SHE-HIVE offices
                      <br />
                      Ha-Hoohlo, Maseru, Lesotho
                    </p>
                    <p className="text-sm text-gray-500">In-person counselling available</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-green-600 mx-auto" />
                  <p className="text-gray-600 font-medium">SHE-HIVE offices, Ha-Hoohlo, Maseru</p>
                  <p className="text-sm text-gray-500">Google Maps integration coming soon</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800">Send Us a Message</CardTitle>
                <p className="text-gray-600">Your message will be kept strictly confidential</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input placeholder="Phone Number (Optional)" />
                <Textarea placeholder="How can we help you? Share what's on your mind..." className="h-32" />
                <Button className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
                <p className="text-xs text-gray-500 text-center">
                  By sending this message, you acknowledge our commitment to confidentiality and privacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/images/logo.jpg" alt="Logo" className="h-8 w-8 object-contain" />
                <div>
                  <h3 className="text-lg font-bold">Bothoba-Pelo Foundation</h3>
                  <p className="text-sm text-gray-400">"Caring for Lives..."</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Providing free psychosocial support for climate change-related mental health challenges in Lesotho.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Eco-Anxiety Counselling</li>
                <li>Climate Stress Management</li>
                <li>Resilience Building</li>
                <li>Crisis Support</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: 58001600(W)</p>
                <p>Email: bothobapelofoundation@gmail.com</p>
                <p>Location: SHE-HIVE offices, Ha-Hoohlo, Maseru, Lesotho</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Bothoba Pelo Foundation. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Gallery CTA - Fixed Floating Button */}
      <a
        href="/gallery"
        className="md:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:from-red-700 hover:to-pink-700 transition-all transform hover:scale-105 animate-bounce"
      >
        <Images className="h-6 w-6" />
        <span className="font-semibold text-lg">View Gallery</span>
      </a>
    </div>
  )
}
