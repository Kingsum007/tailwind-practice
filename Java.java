class Java{
    public static void main(String[] args) {
        // int a = 1;
        // int b = 2;
        // int c= a+b;
        // System.out.println("The Addition of "+ a +" and "+ b +" is: "+c);
        int n = 20;
        String r = (n%2==0)?"Even":"Odd";
        System.out.println(r);

        int r1 = n%2;

        if(r1==0)
        {
            System.out.println("The Number is Even");
        }
        else
        {
            System.out.println("The Number is Odd");
        }


        int x = 32;
        int y = x%3;

        System.out.println(y);

        

    }
}