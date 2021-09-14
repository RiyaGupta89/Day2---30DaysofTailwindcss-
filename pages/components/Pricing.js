const Pricing = () => {
    return(
        <div className="pb-24">
        <h1 className="font-semibold text-2xl md:text-4xl my-4 text-center">Pricing</h1>
        <p className="w-2/3 text-center m-auto text-base text-gray-800 mb-16" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, iste? Aamet consectetur adipisicing elit. Expedita recusandae neque tenetur!</p>
        <table class="table-fixed">
            <tr className="bg-red-50 rounded-sm">
                <th className="w-1/4 py-2 text-sm font-semibold text-gray-900">Plan</th>
                <th className="w-1/4 py-2 text-sm font-semibold text-gray-900">Speed</th>
                <th className="w-1/4 py-2 text-sm font-semibold text-gray-900">Storage</th>
                <th className="w-1/4 py-2 text-sm font-semibold text-gray-900">Price</th>
                <th></th>
            </tr>
            <tr className="text-center border-b border-gray-200">
                <td className="py-2 text-gray-800">Start</td>
                <td className="py-2 text-gray-800">5 MB/s</td>
                <td className="py-2 text-gray-800">15 GB</td>
                <td>Free</td>
                <input type="radio" className="mt-3" name="price" />
            </tr>
            <tr className="text-center border-b border-gray-200">
                <td className="py-2 text-gray-800">Pro</td>
                <td className="py-2 text-gray-800">25 MB/s</td>
                <td className="py-2 text-gray-800">25 GB</td>
                <td>$24</td>
                <input type="radio" className="mt-3" name="price" />
            </tr>
            <tr className="text-center border-b border-gray-200">
                <td className="py-2 text-gray-800">Business</td>
                <td className="py-2 text-gray-800">36 MB/s</td>
                <td className="py-2 text-gray-800">40 GB</td>
                <td>$50</td>
                <input type="radio" className="mt-3" name="price" />
            </tr>
            <tr className="text-center border-b border-gray-200">
                <td className="py-2 text-gray-800">Exclusive</td>
                <td className="py-2 text-gray-800">48 MB/s</td>
                <td className="py-2 text-gray-800">120 GB</td>
                <td>$72</td>
                <input type="radio" className="mt-3" name="price" />
            </tr>
        </table>
        <div className="flex justify-between items-center">
            <a href="#" className="flex text-red-600 items-center m-6"> Learn More <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pl-2 pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg> </a>

        <button className="bg-red-600 py-2 px-8 text-white rounded-sm hover:bg-red-500">Book now</button>

        </div>
        </div>
    );
}

export default Pricing;