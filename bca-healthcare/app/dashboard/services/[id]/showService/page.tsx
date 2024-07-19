// import Form from '@/app/ui/invoices/edit-form';
import Nav from '@/app/ui/nav';
import Breadcrumbs from '@/app/ui/services/breadcrumbs';
import { notFound } from 'next/navigation';
 
export default async function Page({params}: {params: {id: string}}) {
    const id = params.id
    // const [invoice, customers] = await Promise.all([
    //     fetchInvoiceById(id),
    //     fetchCustomers(),
    // ])
    // if(!invoice){
    //   notFound();
    // }
  return (
    <main>
      <Nav/>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/dashboard' },
          {
            label: 'Services',
            href: `/dashboard/services/${id}/showService`,
            active: true,
          },
        ]}
      />
      {/* <Form invoice={invoice} customers={customers} /> */}
    </main>
  );
}