{% highlight ruby %}
  class Greet
    def self.to(who)
      puts "Hello #{who.name}"
    end
  end

  Greet.to visitor
{% endhighlight %}
