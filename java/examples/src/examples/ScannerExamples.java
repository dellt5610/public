package examples;

import java.util.ArrayList;
import java.util.Scanner;

public class ScannerExamples {

	public static void main(String[] args) {
		example3();
		
	}
	
	public static void example1() {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter you name");
		String name = sc.next();
		System.out.println("Enter your age");
		int age = sc.nextInt();
		System.out.println("Enter your height");
		double height = sc.nextDouble();
		
		sc.close();
		
		System.out.println("Name: " + name + " age: " + age + " height: " + height);		
	}
	
	public static void example2() {		
		String str = "10 tea 20 coffee 30 tea buiscuits";
		Scanner sc = new Scanner(str).useDelimiter("\\s");
		System.out.println(sc.nextInt());
		System.out.println(sc.next());
		System.out.println(sc.nextInt());
		System.out.println(sc.next());
		sc.close();
	}
	
	public static void example3() {
		System.out.println("Enter a array of integer:");
		Scanner sc1 = new Scanner(System.in);
		String str = sc1.nextLine();

		Scanner sc2 = new Scanner(str).useDelimiter("\\s");
		ArrayList arrNumbers = new ArrayList();
		while(sc2.hasNext()) {
			int a = sc2.nextInt();
			arrNumbers.add(a);
			
		}
		System.out.println(arrNumbers);
		sc1.close();
		sc2.close();
	}

}
