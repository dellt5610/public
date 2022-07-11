import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) {
		int watchedMinutes = 0;
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			String strN = br.readLine();
			int N = Integer.parseInt(strN) + 1;
			String str = br.readLine();
			str += " 90";
			String[] array = str.split(" ");
			for (int i = 0 ; i < array.length; i++) {
				int now = Integer.parseInt(array[i]);
				int previous = 0;
				if (i > 0)
					previous = Integer.parseInt(array[i-1]);
				
				int minutes = now - previous;
				
				if (minutes <= 15)
					watchedMinutes += minutes;
				else {
					watchedMinutes += 15;
					break;
				}
			}
		}catch(Exception e) {
			System.err.println(e.getMessage());
		}
		System.out.println(watchedMinutes);
	}

}
