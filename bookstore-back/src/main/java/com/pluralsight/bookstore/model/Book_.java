package com.pluralsight.bookstore.model;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2020-04-20T15:53:03.815-0400")
@StaticMetamodel(Book.class)
public class Book_ {
	public static volatile SingularAttribute<Book, Long> id;
	public static volatile SingularAttribute<Book, String> title;
	public static volatile SingularAttribute<Book, String> description;
	public static volatile SingularAttribute<Book, Float> unitCost;
	public static volatile SingularAttribute<Book, String> isbn;
	public static volatile SingularAttribute<Book, Date> publicationDate;
	public static volatile SingularAttribute<Book, Integer> nbOfPages;
	public static volatile SingularAttribute<Book, String> imageUrl;
	public static volatile SingularAttribute<Book, Language> language;
}
