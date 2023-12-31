﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postamat
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Посылка.
    /// </summary>
    // *** Start programmer edit section *** (Посылка CustomAttributes)

    // *** End programmer edit section *** (Посылка CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПосылкаE", new string[] {
            "ID as \'ID\'",
            "Статус as \'Статус\'",
            "Отправитель as \'Отправитель\'",
            "Получатель as \'Получатель\'",
            "Логистика as \'Логистика\'",
            "Логистика.Состояние as \'Состояние\'",
            "Логистика.Информация as \'Информация\'"}, Hidden=new string[] {
            "Логистика.Информация"})]
    [MasterViewDefineAttribute("ПосылкаE", "Логистика", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Информация")]
    public class Посылка : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private IIS.Postamat.Статус fСтатус;
        
        private string fОтправитель;
        
        private string fПолучатель;
        
        private IIS.Postamat.Логистика fЛогистика;
        
        private IIS.Postamat.Транзакция fТранзакция;
        
        // *** Start programmer edit section *** (Посылка CustomMembers)

        // *** End programmer edit section *** (Посылка CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.ID CustomAttributes)

        // *** End programmer edit section *** (Посылка.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.ID Get start)

                // *** End programmer edit section *** (Посылка.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Посылка.ID Get end)

                // *** End programmer edit section *** (Посылка.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.ID Set start)

                // *** End programmer edit section *** (Посылка.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Посылка.ID Set end)

                // *** End programmer edit section *** (Посылка.ID Set end)
            }
        }
        
        /// <summary>
        /// Отправитель.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Отправитель CustomAttributes)

        // *** End programmer edit section *** (Посылка.Отправитель CustomAttributes)
        [StrLen(255)]
        public virtual string Отправитель
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Отправитель Get start)

                // *** End programmer edit section *** (Посылка.Отправитель Get start)
                string result = this.fОтправитель;
                // *** Start programmer edit section *** (Посылка.Отправитель Get end)

                // *** End programmer edit section *** (Посылка.Отправитель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Отправитель Set start)

                // *** End programmer edit section *** (Посылка.Отправитель Set start)
                this.fОтправитель = value;
                // *** Start programmer edit section *** (Посылка.Отправитель Set end)

                // *** End programmer edit section *** (Посылка.Отправитель Set end)
            }
        }
        
        /// <summary>
        /// Получатель.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Получатель CustomAttributes)

        // *** End programmer edit section *** (Посылка.Получатель CustomAttributes)
        [StrLen(255)]
        public virtual string Получатель
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Получатель Get start)

                // *** End programmer edit section *** (Посылка.Получатель Get start)
                string result = this.fПолучатель;
                // *** Start programmer edit section *** (Посылка.Получатель Get end)

                // *** End programmer edit section *** (Посылка.Получатель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Получатель Set start)

                // *** End programmer edit section *** (Посылка.Получатель Set start)
                this.fПолучатель = value;
                // *** Start programmer edit section *** (Посылка.Получатель Set end)

                // *** End programmer edit section *** (Посылка.Получатель Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Статус CustomAttributes)

        // *** End programmer edit section *** (Посылка.Статус CustomAttributes)
        public virtual IIS.Postamat.Статус Статус
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Статус Get start)

                // *** End programmer edit section *** (Посылка.Статус Get start)
                IIS.Postamat.Статус result = this.fСтатус;
                // *** Start programmer edit section *** (Посылка.Статус Get end)

                // *** End programmer edit section *** (Посылка.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Статус Set start)

                // *** End programmer edit section *** (Посылка.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (Посылка.Статус Set end)

                // *** End programmer edit section *** (Посылка.Статус Set end)
            }
        }
        
        /// <summary>
        /// Посылка.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Логистика CustomAttributes)

        // *** End programmer edit section *** (Посылка.Логистика CustomAttributes)
        [PropertyStorage(new string[] {
                "Логистика"})]
        [NotNull()]
        public virtual IIS.Postamat.Логистика Логистика
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Логистика Get start)

                // *** End programmer edit section *** (Посылка.Логистика Get start)
                IIS.Postamat.Логистика result = this.fЛогистика;
                // *** Start programmer edit section *** (Посылка.Логистика Get end)

                // *** End programmer edit section *** (Посылка.Логистика Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Логистика Set start)

                // *** End programmer edit section *** (Посылка.Логистика Set start)
                this.fЛогистика = value;
                // *** Start programmer edit section *** (Посылка.Логистика Set end)

                // *** End programmer edit section *** (Посылка.Логистика Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Postamat.Транзакция.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Транзакция CustomAttributes)

        // *** End programmer edit section *** (Посылка.Транзакция CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Транзакция"})]
        public virtual IIS.Postamat.Транзакция Транзакция
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Транзакция Get start)

                // *** End programmer edit section *** (Посылка.Транзакция Get start)
                IIS.Postamat.Транзакция result = this.fТранзакция;
                // *** Start programmer edit section *** (Посылка.Транзакция Get end)

                // *** End programmer edit section *** (Посылка.Транзакция Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Транзакция Set start)

                // *** End programmer edit section *** (Посылка.Транзакция Set start)
                this.fТранзакция = value;
                // *** Start programmer edit section *** (Посылка.Транзакция Set end)

                // *** End programmer edit section *** (Посылка.Транзакция Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПосылкаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПосылкаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПосылкаE", typeof(IIS.Postamat.Посылка));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Посылка.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfПосылка CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfПосылка CustomAttributes)
    public class DetailArrayOfПосылка : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Postamat.DetailArrayOfПосылка members)

        // *** End programmer edit section *** (IIS.Postamat.DetailArrayOfПосылка members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Посылка by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Посылка.
        /// </summary>
        public DetailArrayOfПосылка(IIS.Postamat.Транзакция fТранзакция) : 
                base(typeof(Посылка), ((ICSSoft.STORMNET.DataObject)(fТранзакция)))
        {
        }
        
        public IIS.Postamat.Посылка this[int index]
        {
            get
            {
                return ((IIS.Postamat.Посылка)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Postamat.Посылка dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
