# What can I use this data for?

The [Bureau of Labor Statistics](http://en.wikipedia.org/wiki/Bureau_of_Labor_Statistics) is a federal agency of the U.S. government tasked with fact-finding about [labour economics](http://en.wikipedia.org/wiki/Labor_economics) within the U.S.

The data is used as a measure of [regional inflation](http://en.wikipedia.org/wiki/Inflation#Measures) for the U.S.

Check out this overview of how different prices from the consumer database are weighted to construct the [Consumer Price Index](http://en.wikipedia.org/wiki/Consumer_price_index), see this graphic by the New York Times: [All of Inflation's Little Parts](http://www.nytimes.com/interactive/2008/05/03/business/20080403_SPENDING_GRAPHIC.html). But what if you want to know more than average price weights from March 2007 to March 2008?

# Getting data on inflation

Okay. You're convinced. The Bureau of Labor Statistics can help you understand the U.S. economy by getting the facts about price histories in the U.S. market. 

In a few minutes, you'll have not only a simple visualization for a single commodity, but a data file you can combine with others to do your own analysis or make an interactive graphic.

Go to the [BLS Database](http://www.bls.gov/data/) section and pick a database.

Let's get the *average price* of *romaine lettuce* for *U.S. cities*.

### Start your search

the *Average Price Data* row, click *Multi-Screen Data Search*

### Pick a region

Choose *0000 U.S. city average*, or other region of interest

After selecting the region, click *Next form*

### Select a commodity

Pick a food from the table, or search by item name with the first text box in the form. Type *lettuce* and click Search.

Two results should appear: *Lettuce, iceberg* and *Lettuce, romaine*. Pick your favorite salad lettuce.

Click *Next form*

### Save your search

For reference! Romaine lettuce will produce a code like this:

  APU0000FL2101

You might want to save this as part of the CSV filename you create later.

Click *Retrive Data*

### Examine the data table

You can inspect the data table now, but it might help to create a graph first...

### Create a graph

Click *include graphs* then the little blue *Go* button.

You should see a graph like the following following:

```
  Series Id:  APU0000FL2101
  Area:       U.S. city average
  Item:       Lettuce, romaine, per lb. (453.6 gm)
```

[![lettuce graph](https://github.com/syntagmatic/labor-statistics/raw/master/graphs/lettuce.gif)](#lettuce)
### Export a CSV

Click *More Formatting Options*

Check the *All Years* button

Change the *Output Type* to *Text*, and leave as *comma delimited*

Click *Retrive Data*

You'll be returned to a page, which may or may not have a graph. You should see a block of numbers and commas with no spaces, with columns: 
 
```
  Year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,Annual,
```

The last few columns may be a bit different.

Copy this entire block of text and save it as a text file, *lettuce.csv*.

You've just extracted the price history for a commodity out of the Bureau of Labor Statistics database as a graph and data file. Congratulations!

### Visualize the data

The [CSV](http://en.wikipedia.org/wiki/Comma-separated_values) file is compatible with spreadsheet software like Excel and [http://www.libreoffice.org/](http://www.libreoffice.org/), which can both produce other types of charts. 

* [Fusion Tables](http://www.google.com/fusiontables/Home/)

To build an interactive graphic for the web, try:

* [D3](http://d3js.org/)

### Tutorials 

* [Create Customized Tables](http://www.bls.gov/tutorial/multi_screen/html_version.htm) - similar to the above tutorial with pictures.
* [Bureau of Labor Statistics FAQ](http://www.bls.gov/help/hlpform1.htm)

### Files in the repository

There are some data files extracted in the above manner sitting in the [data](https://github.com/syntagmatic/labor-statistics/tree/master/data) folder, as well as [graphs](https://github.com/syntagmatic/labor-statistics/tree/master/graphs). I plan to add starting points for interactive graphics as well to the repository.

* Total CPI for all urban consumers 1947-2912 - CUSR0000SA0

