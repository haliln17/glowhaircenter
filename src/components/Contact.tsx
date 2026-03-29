import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { translations } from '../utils/translations';
import { Form, Input, Select, Button, message as antMessage } from 'antd';
import type { FormProps } from 'antd';

interface ContactProps {
  language: string;
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language];
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  type FieldType = {
    name?: string;
    email?: string;
    whatsapp?: string;
    language?: string;
    message?: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    setIsSubmitting(true);

    // Form Submit GA4 Event Tracker
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submission', {
        'event_category': 'Lead',
        'event_label': 'Saç Ekimi Danışma Formu'
      });
    }

    try {
      const response = await fetch('https://hook.eu1.make.com/yjhnyvkieglmdjb7o3isz9k0dgp8dg8u', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      antMessage.success({
        content: t.contact.form.successMessage,
        duration: 5,
        className: 'mt-16',
      });
      form.resetFields();
    } catch (error) {
      console.error('Submission error:', error);
      antMessage.error({
        content: t.contact.form.errorMessage,
        duration: 5,
        className: 'mt-16',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase">
              {t.contact.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {t.contact.headline}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.contact.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.contact.form.title}</h3>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="space-y-4"
                requiredMark={false}
              >
                <Form.Item<FieldType>
                  name="name"
                  label={<span className="text-slate-700 font-medium">{t.contact.form.name}</span>}
                  rules={[{ required: true, message: t.contact.form.validation.nameRequired }]}
                >
                  <Input
                    size="large"
                    className="w-full rounded-xl border-slate-300 focus:border-teal-500 hover:border-teal-500 focus:ring-teal-200 py-2.5 px-4"
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="email"
                  label={<span className="text-slate-700 font-medium">{t.contact.form.email}</span>}
                  rules={[
                    { required: true, message: t.contact.form.validation.emailRequired },
                    { type: 'email', message: t.contact.form.validation.emailInvalid }
                  ]}
                >
                  <Input
                    size="large"
                    type="email"
                    className="w-full rounded-xl border-slate-300 focus:border-teal-500 hover:border-teal-500 focus:ring-teal-200 py-2.5 px-4"
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="whatsapp"
                  label={<span className="text-slate-700 font-medium">{t.contact.form.whatsapp}</span>}
                  rules={[{ required: true, message: t.contact.form.validation.whatsappRequired }]}
                >
                  <Input
                    size="large"
                    type="tel"
                    className="w-full rounded-xl border-slate-300 focus:border-teal-500 hover:border-teal-500 focus:ring-teal-200 py-2.5 px-4"
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="language"
                  label={<span className="text-slate-700 font-medium">{t.contact.form.language}</span>}
                  rules={[{ required: true, message: t.contact.form.validation.languageRequired }]}
                >
                  <Select
                    size="large"
                    className="w-full rounded-xl [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-slate-300 hover:[&_.ant-select-selector]:!border-teal-500 focus:[&_.ant-select-selector]:!border-teal-500 [&_.ant-select-selector]:!shadow-none"
                    placeholder={t.contact.form.selectLanguage}
                    style={{ height: '48px' }}
                    options={[
                      { value: 'tr', label: 'Türkçe' },
                      { value: 'en', label: 'English' },
                      { value: 'it', label: 'Italiano' },
                      { value: 'ar', label: 'العربية' }
                    ]}
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="message"
                  label={<span className="text-slate-700 font-medium">{t.contact.form.message}</span>}
                >
                  <Input.TextArea
                    rows={4}
                    className="w-full rounded-xl border-slate-300 focus:border-teal-500 hover:border-teal-500 p-4 focus:ring-teal-200 resize-none hover:shadow-none focus:shadow-none"
                  />
                </Form.Item>

                <Form.Item className="mb-0">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                    icon={!isSubmitting && <Send size={20} />}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 border-none text-white h-14 rounded-xl text-lg font-semibold hover:shadow-xl hover:text-white hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 [&>span]:ml-2"
                  >
                    {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">{t.contact.info.title}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t.contact.info.location.title}</h4>
                    <p className="text-slate-300">{t.contact.info.location.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t.contact.info.phone.title}</h4>
                    <p className="text-slate-300">+355 697 764 801</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t.contact.info.email.title}</h4>
                    <p className="text-slate-300">glowhaircenter@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t.contact.info.hours.title}</h4>
                    <p className="text-slate-300">{t.contact.info.hours.schedule}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95802.61348494784!2d19.72393632089841!3d41.327953300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sTirana%2C%20Albania!5e0!3m2!1sen!2s!4v1234567890"
                title="Google Maps Location of Glow Hair Center"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
