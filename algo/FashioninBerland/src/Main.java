import java.io.BufferedReader;
import java.io.InputStreamReader;

/**
 * 
 * @author california
 * Ref: http://codeforces.com/problemset/problem/691/A
 */
public class Main {

	public static void main(String[] args) {
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			String strN = br.readLine();
			int n = Integer.parseInt(strN);
			String str = br.readLine();
			String[] array = str.split(" ");
			int sum = 0;
			for (int i = 0 ; i < array.length; i++) {
				Integer a = Integer.parseInt(array[i]);
				sum += a;
			}
			if ((n > 1 && sum == n - 1) || (n == 1 && sum == 1))
				System.out.println("YES");
			else
				System.out.println("NO");
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
	}
}
